import React from 'react';
import mechanic1 from '../../../images/mechanics/mechanic1.jpg';
import mechanic2 from '../../../images/mechanics/mechanic2.jpg';
import mechanic3 from '../../../images/mechanics/mechanic3.jpg';
import mechanic4 from '../../../images/mechanics/mechanic4.jpg';
import Expert from '../Expert/Expert';

const experts = [
    { img: mechanic1, name: 'Andrew', expertize: 'Engine Expert' },
    { img: mechanic2, name: 'Michale', expertize: 'Polish Expert' },
    { img: mechanic3, name: 'Smith', expertize: 'Coloring Expert' },
    { img: mechanic4, name: 'Clerk', expertize: 'Tire Expert' }
];

const Experts = () => {
    return (
        <div className='container'>
            <h2 className='text-primary'>Our Experts</h2>
            <div className='row'>
                {
                    experts.map(expert => <Expert
                        key={expert.name}
                        expert={expert}
                    ></Expert>)
                }
            </div>
        </div>
    );
};

export default Experts;