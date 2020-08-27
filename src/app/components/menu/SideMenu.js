import React from 'react';
import '../../styles/App.css';

const SideMenu = ({ changeCategory, category }) => {
    const links = [
        { name:"Légumes",         category:'légumes'  }, 
        { name:"Fruits",          category:'fruits'   }, 
        { name:"Prodruits frais", category:'frais'    }, 
        { name:"Epicerie",        category:'epicerie' }, 
        { name:"Boissons",        category:'boissons' }
    ]
    return (
        <div className="col-sm-2 sidebar">
            <ul>
                {links.map((link, index) => 
                    <li 
                        className={ `${ link.category === category && 'active' } ` }
                        key={index}
                        onClick={ () => changeCategory(link.category) }
                    > 
                        { link.name } 
                    </li>
                )}
            </ul>
        </div>
    );
};

export default SideMenu;