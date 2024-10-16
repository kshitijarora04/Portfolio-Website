import React from 'react'
import './MyWork.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mywork_data from '../../assets/mywork_data'

const Mywork = () => {
    return (
        <div className='mywork' id='work'>
            <div className="mywork-title">
                <h1>My Projects</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="mywork-container">
                {/* {mywork_data.map((work, index) => {
                    return <img key={index} src={work.w_img} />
                })} */}
                {mywork_data.map((work, index) => {
                    return (
                        <div key={index}>
                            <a href={work.w_link}>
                                <img src={work.w_img} alt={`Work ${index}`} />
                            </a>
                            <p>{work.w_name}</p> {/* Display the text here */}
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default Mywork
