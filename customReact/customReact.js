

function createElement(reactElement,container){
    
    const domElement = document.createElement(reactElement.type);
       domElement.innerHTML  = reactElement.childern;

    //    domElement.setAttribute('href',reactElement.props.herf);
    //    domElement.setAttribute('target',reactElement.props.target);

    for (const prop in reactElement.props) {
        if(prop === 'childern') continue;
        domElement.setAttribute(prop,reactElement.props[prop]);

    }

       container.appendChild(domElement);
    
}
const mainContainer = document.getElementById('root');


const reactElement = {

    type : 'a',

    props : {
        href : 'https://google.com/',
        target : 'blank'
    },

    childern : 'cilck this link to visit google'

}

createElement(reactElement,mainContainer);
