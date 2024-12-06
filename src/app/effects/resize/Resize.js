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

    enabled: true,
    values: {
        width: 0,
        height: 0,
    },

    component: ResizeComponent,

    imageFunction: function ({ p5, image }) {
        let newWidth = parseInt(this.values.width)
        let newHeight = parseInt(this.values.height)

        image.resize(newWidth, newHeight)
        return image
    },
}

const normCanvasSize = (axis) => {
    const parsed = parseInt(Math.ceil(axis));
    const measure = Math.max(1, parsed)
}
export default Resize