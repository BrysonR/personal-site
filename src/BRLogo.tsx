import * as React from 'react';
const svgJS = require('svgjs');

const brPath = `M26,1.00465574 L33.8259899,1.00052499 C34.3753469,1.00023503 35.268335,1.00053404 35.8256344,1.00119895 L37.7180681,1.00345677 C38.2730842,1.00411894 39.0570127,1.31478176 39.4629788,1.69173097 L48.7486755,10.313721 C49.157347,10.6931822 49.1582098,11.2902118 48.7293038,11.665879 L43.3971241,16.3361913 C42.9777539,16.7035064 42.1819068,17.001274 41.6302679,17.001274 L28.9360801,17.001274 L28.9360801,17.001274 C28.9360801,17.001274 28.9313353,17.4478156 28.9256102,17.9866124 L28.9360801,17.001274 C28.9302977,17.5454614 28.9360801,18.0013537 28.9360801,18.0013537 L28.9360801,18.0013537 L41.6302679,17.9876965 C42.1867054,17.9870978 42.8828696,18.3512216 43.1939243,18.8139773 L52.847277,33.175263 C53.1544231,33.6322039 52.9506401,34.0026277 52.3956125,34.0026277 L26,34.0026277 L26,1.00465574 Z M26,1 L15.2723633,1 C14.7201439,1 13.9389605,1.31024575 13.5335752,1.6873405 L4.26116303,10.3126595 C3.85307623,10.6922672 3.8522147,11.2893925 4.28050709,11.6650298 L9.60505831,16.3349702 C10.0238285,16.702256 10.8154799,17 11.3602341,17 L23.0681204,17 L23.0681204,17 C23.0681204,17 23.0681204,17.453186 23.0681204,18 L23.0681204,17 C23.0681204,17.5522847 23.0684187,18 23.0684187,18 L23.0684187,18 L11.3602575,18 C10.809658,18 10.0292498,18.3038406 9.62852614,18.6683155 L2.30245288,25.3316845 C1.89664357,25.7007849 1.90172919,26.3038406 2.30245288,26.6683155 L9.62852614,33.3316845 C10.0343354,33.7007849 10.8144212,34 11.3652412,34 L26,34 L26,1 Z`;

const logoStartWidth = 240;
const logoStartHeight = 132;
const logoFinalWidth = 120;
const logoFinalHeight = 66;
const purple = '#9012FE';
const pink = '#FF0078';
const moveDuration = 1000;

export class BRLogo extends React.Component<any, any> {
    constructor (props: React.Props<any>) {
        super(props);
    }

    componentDidMount () {
        this.initializeLogo();

        window.onresize = () => this.initializeLogo();
    }

    initializeLogo () {
        const logoContainer = document.getElementById('brLogo')!;
        logoContainer.innerHTML = "";
        let brDrawing = svgJS('brLogo').size(window.innerWidth, window.innerHeight);
        brDrawing = this.drawLogo(brDrawing);
        brDrawing = this.animateLogo(brDrawing);
        // this.translateLogo(brDrawing);
    }

    drawLogo (drawing) {
        const left = (window.innerWidth / 2) - (logoStartWidth / 2);
        const top = (window.innerHeight / 2) - (logoStartHeight / 2);

        return drawing
            .path(brPath)
            .fill('#FFF')
            .x(left)
            .y(top)
            .width(logoStartWidth)
            .height(logoStartHeight)
            .stroke({
                color: 'white'
            });
    }

    animateLogo (drawing) {
        const initialOffset = drawing.length();
        const self = this;

        return drawing
            .stroke({ 
                color: pink,
                width: 5, 
                linecap: 'round',
                linejoin: 'round',
                alignment: 'inside',
            })
            .attr({
                'stroke-dasharray': initialOffset,
                'stroke-dashoffset': initialOffset
            })
            .animate({ease: '-', duration: moveDuration})
            .stroke({
                dashoffset: initialOffset / 2
            })
            .after(function () {
                return self.translateLogo(this)
            });
    }

    translateLogo (drawing) {
        drawing
            .animate({ease: '<>', duration: moveDuration})
            .y(17)
            .width(logoFinalWidth)
            .height(logoFinalHeight)
            .fill(purple)
            .stroke({
                width: 0,
                color: purple
            });
        
        this.setState({
            drawing
        });
    }

    render () {
        return (
            <div id="brLogo"></div>
        );
    }
}