
import React, { memo } from "react";

const InfoComponent = ({ title, value }) => {

    console.log(`infocomponent rendering for ${title}`)
    return (
        <div style={{ backgroundColor: '#FFFFE0' }}>
            <h3>{title}</h3>
            <h5>{value}</h5>
        </div>
    );
};

export default memo(InfoComponent);
