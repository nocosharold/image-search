const Image = (props) => {
    // we used JS map function to loop through the jokes object
    // we then store each jokes to the jokes variable
    let {id,urls,alt_description} = props.image;
    
    return (
        <>
            <img src={urls.thumb} alt={alt_description} />
        </>
    );

    
};
export default Image;