import { defineComponent, h } from 'vue'

export const createC = () => {
  return defineComponent({
    setup() {
      return {
        message: 'hello'
      }
    },
    template: `<div>createC111</div>`,
    // render: () => <div>adadasad<p>adadad</p></div>,
    // render: ()=>{
    //   return h('div',{},'createC222')
    // }
  })
}

// module.js
let thing =  {
  name: 'thing',
};

export { thing, thing as default };
// export { thing };
// export default thing;

setTimeout(() => {
  thing.name = 'changed';
}, 500);


// export default {}
