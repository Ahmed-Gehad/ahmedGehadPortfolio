import React from 'react'
import { Link } from 'react-router-dom';

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
    return (
        <div>
            <div
                className='rounded group '
                style={{
                    background: `url(${imgUrl})`,
                    backgraoundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    position: 'relative',
                }}
            >
                <div className='overlay grpup-hover:opacity-0
                transition-all duration-30     '
                >
                    <Link to={gitUrl} hreaf target='_blank'>
                    <i class="fa-solid fa-code pe-3"></i>
                    </Link>
                    <Link to={previewUrl} target='_blank'>
                    <i class="fa-regular fa-eye ps-3"></i>
                    </Link>
                </div>
            </div>
            <div className='text-white py-6 px-4'>
                <h5 className='fw-bold fs-3 mb-3'>{title}</h5>
                <p className='lead'>{description}</p>
            </div>
        </div>
    )
}

export default ProjectCard