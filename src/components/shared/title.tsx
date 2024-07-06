import React from 'react';
import Typography from './typography';
import style from './../../styles-modules/page.module.css';

interface TitleProps {
    text: string;
    color?: string;
    size?: number;
    width: number;
    align?: 'start' | 'center' | 'end';
}

const Title: React.FC<TitleProps> = ({
    text,
    color = 'white',
    size,
    width,
    align = 'start'
}) => {
    return (
        <div
            className={style.titleContent}
            style={{ alignItems: align }}
        >
            <Typography
                type='title'
                size={size}
                width={width}
                color={color}
            >
                {text}
            </Typography>
            <hr style={{ ...customStyle, backgroundColor: color }} />
        </div>
    );
};

const customStyle = {
    width: '50%',
    height: 4
};

export default Title;
