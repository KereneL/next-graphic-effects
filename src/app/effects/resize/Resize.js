import ResizeComponent from "./component"

const Resize = {

    schema: {
        "title": "Resize",
        "idleStyle": {
            backgroundColor: '#fbe7c6 ',
            color: '#000000',
            borderColor: '#3d4a56',
        },
        "selectedStyle": {
            backgroundColor: '#fbe7c6 ',
            color: '#865709 ',
            borderColor: '#f1ab38  ',
        }
    },

    enabled: false,
    values: {
        width: 200,
        height: 200,
    },

    component: ResizeComponent,

    imageFunction: function ({ p5, image }) {
        let newWidth = parseInt(this.values.width)
        let newHeight = parseInt(this.values.height)

        if (newWidth === 1 && newHeight === 0)
            image.resize(1, 1)
        else
            image.resize(newWidth, newHeight)

        return image
    },
};

export default Resize