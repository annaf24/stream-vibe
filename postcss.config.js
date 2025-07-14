import postcssPxToRem from 'postcss-pxtorem'

export default ({env}) => {
    const isProd = env === 'production';
    const plugins = [];

    if (isProd) {
       plugins.push(
        postcssPxToRem({
            /* здесь можно перечислить названия css-свойств,
            которые будут подвержены автоматическому
            преобразванию из px в rem, * - все свойства */
            propList: ['*'],
            /* настройка для обработки медиавыражений*/
            mediaQuery: true,
        })
       ) 
    }

    return {
        plugins,
    }
}