import {bootstrap, Component, Template} from 'angular2/angular2';

@Component({
  selector: 'editor-app'
})
@Template({
  inline: '<h1>{{name}}</h1>',
  replace: true
})
class EditorApp {
  constructor(){
    this.name = 'thoughtram Editor'
  }
}

export const run = () => {
  bootstrap(EditorApp);
}
