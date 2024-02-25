import { useState, useEffect } from 'react';
import { css } from '@emotion/css';
import { ClassNameMap } from '@mui/material';
import _ from 'lodash';

interface GeneratedStyles {
    [key: string]: string;
}

const useCustomStyles = (styles: any, theme: any) => {
    const [classes, setClasses] = useState<ClassNameMap>({});

    useEffect(() => {
        if (!_.isNil(classes)) {
            const evaluatedStyles: GeneratedStyles =
                typeof styles === 'function' ? styles(theme) : styles;
            const generated: GeneratedStyles = {};

            for (const key in evaluatedStyles) {
                generated[key] = css(evaluatedStyles[key]);
            }

            setClasses(generated);
        }
    }, [styles, theme]);

    return classes;
};

export default useCustomStyles;
