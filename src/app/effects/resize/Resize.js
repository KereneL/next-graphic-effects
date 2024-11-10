import ResizeComponent from "./component"

const Resize = {

    schema: {
        "title": "Resize",
        "idleStyle": {
            backgroundColor: '#fbe7c6 ',
            color: '#000000',
            borderColor: '#3d4a56',
            boxSizing: 'border-box',
        },
        "selectedStyle": {
            backgroundColor: '#fbe7c6 ',
            color: '#865709 ',
            borderColor: '#f1ab38  ',
            boxSizing: 'border-box',
        }
      },

    values: {
        width: 0,
        height: 0,
    },

    component: ResizeComponent,

    imageFunction: function ({p5, image}) {
        console.log(image)
        image.resize(parseInt(this.values.width),parseInt(this.values.height))
        console.log(image)
        return image
    },
}

export default Resize