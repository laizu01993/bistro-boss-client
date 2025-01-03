import React from 'react';

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className='text-center'>
            <p className='text-[#D99904] mb-2 '>---{subHeading}---</p>
            <h3 className='text-3xl mb-10 border-y-4 max-w-lg mx-auto p-2'>{heading}</h3>
        </div>
    );
};

export default SectionTitle;