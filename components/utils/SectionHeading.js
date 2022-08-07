

const SectionHeading = ({ title, description }) => {
    return (
        <div className='md:mb-[50px] mb-[35px]'>
            {title && (
                <h2 className='mt-0'>{title}</h2>
            )}
            {description && (
                <p className="md:text-[20px] md:leading-[2em] text-[16px] leading-[1.1875em] text-title text-opacity-80 mb-0 mt-[16px]">{description}</p>
            )}
        </div>
    )
}

export default SectionHeading