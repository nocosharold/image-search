const Image = (props) => {
    let { urls, alt_description } = props.image;
    
    return (
        <>
            <img src={urls.thumb} alt={alt_description} />
        </>
    );
};
export default Image;