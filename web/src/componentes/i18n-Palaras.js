

export default (intl, ids) => {
    const translations = {
        Bienvenidos: intl.formatMessage({
        id: 'Bienvenidos',
        defaultMessage: 'eh ta mal'
        }),
        Usuario: intl.formatMessage({
          id: 'Usuario',
          defaultMessage: 'eh ta mal'
        }),
        Logo: intl.formatMessage({
          id: 'Logo',
          defaultMessage: 'eh ta mal'
        }),
        Numero: intl.formatMessage({
          id: 'Numero',
          defaultMessage: 'eh ta mal'
        }),
        Contraseña: intl.formatMessage({
          id: 'Contraseña',
          defaultMessage: 'eh ta mal'
        }),
        Ingreso: intl.formatMessage({
          id: 'Ingreso',
          defaultMessage: 'eh ta mal'
        }),
        Registrar: intl.formatMessage({
          id: 'Registro',
          defaultMessage: 'eh ta mal'
        }),
        Google: intl.formatMessage({
          id: 'Google',
          defaultMessage: 'eh ta mal'
        })
    }
    return ids.reduce((res, id) => [ ...res, translations[id]] , [ ])
}