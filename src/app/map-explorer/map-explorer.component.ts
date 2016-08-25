import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { TreeComponent, TreeNode } from 'angular2-tree-component';
import { ProjectService } from '../shared/services/project.service';
import { MapService } from '../shared/services/map.service';


@Component({
  moduleId: module.id,
  selector: 'pm-map-explorer',
  templateUrl: 'map-explorer.component.html',
  styleUrls: ['../shared/css/map-bar.css', 'map-explorer.component.css'],
  directives: [TreeComponent],
  providers: [ProjectService, MapService]
})
export class MapExplorerComponent implements OnInit {

  @Input() projectsTree: any = [];
  @Output() onMapSelect = new EventEmitter();
  @ViewChild(TreeComponent) tree: TreeComponent;

  constructor(private proejctService: ProjectService, private mapService: MapService) {
  }

  selectMap($event) {
    let node: TreeNode = $event.node;
    if (!node.hasChildren) {
      console.log(node.data);
      if (!node.data.versions) {
        return;
      }
      this.onMapSelect.emit(node.data);
    }
  }

  addMap() {
    console.log('add map');
    let node: TreeNode = this.tree.treeModel.getFocusedNode();
    let project = node.data;
    console.log(node);
    this.mapService.createMap('exampleMap', project.id).subscribe((map) => {
      node.children.push(map);
      this.tree.treeModel.update();
    });
  }

  addProject() {
    this.proejctService.createProject('exampleProject').subscribe((project) => {
      this.projectsTree.push(project);
      this.tree.treeModel.update();
    });
  }

  ngOnInit() {

  }

}
