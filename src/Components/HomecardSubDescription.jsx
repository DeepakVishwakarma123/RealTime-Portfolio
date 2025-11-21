import React from 'react';

const HomecardSubDescription = ({ subTextOfcard }) => {
    return (
        <div className="flex justify-center items-center">
                    <p>
                        {subTextOfcard}
                    </p>
                </div>
    );
};

export default HomecardSubDescription;