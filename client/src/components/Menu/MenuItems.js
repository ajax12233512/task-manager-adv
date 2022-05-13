import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'
const caretStyle = {
    marginRight: '5px',
}
const carets = [<FontAwesomeIcon style={caretStyle} icon={solid('caret-right')}/>, <FontAwesomeIcon icon={solid('caret-right')}/>]


const cName = 'menu-item';
const menuItems = [
    {
        name: 'Today',
        path: '/',
        cName,
        carets
    },
    {
        name: 'Calandar',
        path: '/',
        cName
    },
    {
        name: 'Projects',
        path: '/',
        cName, 
        carets
    },
    {
        name: 'Uncatgorized',
        path: '/',
        cName,
        carets
    },
    {
        name: 'Tags',
        path: '/',
        cName,
        carets
    },
    {
        name: 'Notebook',
        path: '/',
        cName
    },
]

export default menuItems;