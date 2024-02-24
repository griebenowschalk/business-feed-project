import React, { useState, useEffect } from 'react';
import { css } from '@emotion/css';
import { ClassNameMap } from '@mui/material';
import _ from 'lodash';

const useCustomStyles = (styles: any, theme: any) => {
    const [classes, setClasses] = useState<ClassNameMap>({});

    useEffect(() => {
        if (!_.isNil(classes)) {
            const evaluatedStyles = typeof styles === 'function' ? styles(theme) : styles;
            const generated: any = {};

            for (const key in evaluatedStyles) {
                generated[key] = css(evaluatedStyles[key]);
            }

            setClasses(generated);
        }
    }, [styles, theme]);

    return classes;
};

export default useCustomStyles;
