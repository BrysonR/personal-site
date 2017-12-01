import * as React from 'react';
const svgJS = require('svgjs');

const brPath = `M27,2.01015657 C27,1.45483361 27.4469422,1.00442454 27.9989545,1.00413941 L35.0137651,1.000516 C35.5654724,1.00023102 36.4701113,1.00053403 37.0188787,1.00117476 L38.9938408,1.00348065 C39.5495272,1.00412945 40.3292082,1.30379622 40.7388216,1.67599871 L50.2611784,10.3286567 C50.6692183,10.6994294 50.6623755,11.2893925 50.2375519,11.6535269 L44.7624481,16.3464731 C44.3413596,16.707406 43.5500512,17 42.9931545,17 L30,17 C30,17 29.9951519,17.446506 29.9893021,17.9852599 L30,17 C29.9940917,17.544144 30,18 30,18 L42.9931545,17.9863201 C43.5492199,17.9857346 44.2504181,18.34984 44.5606145,18.8014505 L54.4393855,33.1838096 C54.7490044,33.6345791 54.5601869,34 54.0034652,34 L27.9965348,34 C27.4461638,34 27,33.5585182 27,32.9944988 L27,2.01015657 Z M26,2.00564303 C26,1.45024172 25.544239,1 24.9975267,1 L15.0024733,1 C14.4488226,1 13.6707918,1.29928014 13.2611784,1.67165598 L3.73882158,10.328344 C3.33078169,10.6992894 3.33762455,11.2893925 3.76244809,11.6535269 L9.23755191,16.3464731 C9.65864036,16.707406 10.4474894,17 10.9985023,17 L23,17 C23,17 23,17.453186 23,18 L23,17 C23,17.5522847 23.0003052,18 23.0003052,18 L10.9985258,18 C10.4470552,18 9.65817928,18.3038406 9.24814503,18.6683155 L1.75185497,25.3316845 C1.33661694,25.7007849 1.34182072,26.3038406 1.75185497,26.6683155 L9.24814503,33.3316845 C9.66338306,33.7007849 10.4446309,34 11.0008717,34 L24.9991283,34 C25.5518945,34 26,33.5584559 26,32.994357 L26,2.00564303 Z`;

const logoStartWidth = 256;
const logoStartHeight = 140;
const logoFinalWidth = 128;
const logoFinalHeight = 70;
const pink = '#FF0078'

export class BRLogo extends React.Component<any, any> {
    constructor (props: React.Props<any>) {
        super(props);
    }

    componentDidMount () {
        const brDrawing = svgJS('brLogo').size(window.innerWidth, window.innerHeight);
        const left = (window.innerWidth / 2) - (logoStartWidth / 2);
        const top = (window.innerHeight / 2) - (logoStartHeight / 2);
        const el = document.getElementsByTagName('path')[0] as Element;
        const svgEl = el as SVGPathElement;
        const initialOffset = svgEl.getTotalLength();
        
        console.log(initialOffset);
        
        brDrawing
            .path(brPath)
            .x(left)
            .y(top)
            .width(logoStartWidth)
            .height(logoStartHeight)
            .fill('transparent')
            .stroke({ 
                width: 4, 
                color: pink,
                linecap: 'round',
                linejoin: 'round'
            })
            .attr({
                id: 'brLogo'
            });

        brDrawing
            .attr({
                'stroke-dasharray': 1000,
                'stroke-dashoffset': 1000
            });
        
        brDrawing
            .animate({ease: '<>', duration: 5000})
            .attr({
                'stroke-dashoffset': 0
            });
    }

    drawLogo () {
        
    }

    render () {
        return (
            <div id="brLogo"></div>
        );
    }
}