const validate = ( formData ) =>{

    if( !Array.isArray( formData ) ) return false;

    return formData.every( entry => ( entry && entry.name && entry.label ) );
}

export {
    validate
}