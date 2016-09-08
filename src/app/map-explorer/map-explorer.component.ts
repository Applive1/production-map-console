import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { TreeComponent, TreeNode, TREE_ACTIONS, IActionMapping, KEYS } from 'angular2-tree-component';
import { ProjectService } from '../shared/services/project.service';
import { MapService } from '../shared/services/map.service';
import { ContextMenuComponent, ContextMenuService } from 'angular2-contextmenu';
import { Modal } from 'angular2-modal/plugins/bootstrap';

import * as _ from 'lodash';
import { NewProjectComponentWindow, NewProjectComponentWindowData } from "./popups/new-project/new-project.component";
import { NewMapComponentWindow, NewMapComponentWindowData } from "./popups/new-map/new-map.component";

@Component({
  moduleId: module.id,
  selector: 'pm-map-explorer',
  templateUrl: 'map-explorer.component.html',
  styleUrls: ['../shared/css/map-bar.css', 'map-explorer.component.css'],
  directives: [TreeComponent, ContextMenuComponent],
  providers: [ProjectService, ContextMenuService]
})
export class MapExplorerComponent implements OnInit {

  @Input() projectsTree: any = [];
  @Output() onMapSelect = new EventEmitter();
  @ViewChild(TreeComponent) tree: TreeComponent;
  treeOptions: any;

  actionMapping: IActionMapping = {
    mouse: {
      contextMenu: (tree, node, $event) => {
        $event.preventDefault();
        this.openContextMenu($event, node);
      },
      dblClick: TREE_ACTIONS.TOGGLE_EXPANDED,
      click: (tree, node, $event) => {
        $event.shiftKey
          ? TREE_ACTIONS.TOGGLE_SELECTED_MULTI(tree, node, $event)
          : TREE_ACTIONS.TOGGLE_SELECTED(tree, node, $event);
        this.selectMap(node);
      }
      // ,
      // dragStart: (tree, node) => console.log('start drag', node),
      // drag: (tree, node) => console.log('drag', node),
      // dragEnd: (tree, node, $event, ...rest) => console.log('drag end', node, rest[0]),
      // dragOver: (tree, node) => console.log('drag over', node),
      // drop: (tree, node) => console.log('drop', node),
    },
    keys: {
      [KEYS.ENTER]: (tree, node, $event) => {
        node.data.editMode = false;
        if (this.isProject(node)) {
          this.projectService.updateProject(node.data);
        } else {
          this.mapService.updateMap(node.data);
        }
      }
    }
  };

  constructor(private projectService: ProjectService,
              private mapService: MapService,
              private contextMenuService: ContextMenuService,
              public modal: Modal) {
  }

  selectMap(node: TreeNode) {
    if (!this.isProject(node)) {
      this.onMapSelect.emit(node.data);
    }
  }

  mapToItem(map) {
    map.text = map.name;
    map.type = 'map';
  }

  addMap(node: TreeNode) {
    let project = node.data;
    var dialog = this.modal.open(NewMapComponentWindow, new NewMapComponentWindowData(project));

    dialog.then((d) => d.result)
      .then((map) => {
          if (!map) return;

          this.mapToItem(map);
          node.data.children.push(map);
          this.tree.treeModel.update();
        },
        (error) => { console.log(error); });
  }

  addProject() {
    var dialog = this.modal.open(NewProjectComponentWindow, new NewProjectComponentWindowData());

    dialog.then((d) => d.result)
      .then((project) => {
        if (!project) return;

        this.projectsTree.push(project);
        this.tree.treeModel.update();
      },
        (error) => { console.log(error); });
  }

  deleteProject(node: TreeNode) {
    let project: any = node.data;
    this.projectService.deleteProject(project.id).subscribe((res) => {
      _.remove(this.projectsTree, (proj) => { return proj.id === project.id; });
      this.tree.treeModel.update();
    });
  }

  openContextMenu($event, node: TreeNode) {
    if (this.isProject(node)) {
      this.contextMenuService.show.next({
        actions: [
          {
            html: () => `Add map`,
            click: (item) => this.addMap(item)
          },
          {
            html: () => `rename`,
            click: (item) => this.renameNode(item)
          },
          {
            html: () => `Delete Project`,
            click: (item) => this.deleteProject(item)
          },
        ],
        event: $event,
        item: node,
      });
    } else {
      this.contextMenuService.show.next({
        actions: [
          {
            html: () => `rename`,
            click: (item) => this.renameNode(item)
          },
          {
            html: () => `delete map`,
            click: (item) => this.deleteMap(item)
          },
        ],
        event: $event,
        item: node,
      });
    }
  }

  renameNode(node: TreeNode) {
    node.data.editMode = true;
  }

  deleteMap(node: TreeNode) {
    this.mapService.deleteMap(node.data.id).subscribe((res) => {
      _.remove(node.parent.data.children, (map) => { return map.id === node.data.id; });
      this.tree.treeModel.update();
    });
  }

  isProject(node: TreeNode) {
    return !node.data.structure;
  }

  ngOnInit() {
    let actionMapping = this.actionMapping;
    this.treeOptions = {
      treeNodeTemplate: MyTreeNodeTemplate,
      hasCustomContextMenu: true,
      actionMapping
    };
  }

}


@Component({
  template: `<span [hidden]="node.data.editMode"> {{ node.data.name }} </span>
             <span [hidden]="!node.data.editMode"> <input type="text" class="form-control" placeholder="name" [(ngModel)]="node.data.name"></span>`
})
class MyTreeNodeTemplate {
  @Input() node: TreeNode;

}
