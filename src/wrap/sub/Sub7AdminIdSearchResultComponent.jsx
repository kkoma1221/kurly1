import React from 'react';
import './scss/sub.scss';
import './scss/sub6.scss';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Sub7AdminIdSearchResultComponent(){
    
    const location = useLocation();
    const navigate = useNavigate();

    const onClickPwSearchBtn=(e)=>{
        e.preventDefault();
        navigate('/sub7AdminPwSearch');
    }

    const onClickGoLoginBtn1=(e)=>{
        e.preventDefault();
        navigate('/sub7AdminSignin');
    }
    
    return (
        <main id='sub6' className='sub7-admin-id-search-result'>
            <section id='section1'>
                <div className="container">
                    <div className="title id-pw-search-title">
                        <h2 className='title-text'>관리자님의 컬리 계정을 찾았습니다.</h2>
                        <h3>아이디 확인 후 로그인해 주세요.</h3>
                    </div>
                    <div className="content sub6-content">
                        <form action="">
                            <ul>
                                <li>
                                    <div className="gap">
                                        <div className='id-pw-search-text'>
                                            <div className="left">
                                                <img src="./images/sub/icon_id_pw_search_result.svg" alt="" />
                                            </div>
                                            <div className="right">
                                                <p>{location.state.아이디}</p>
                                                <p>{location.state.가입일}</p>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="gap">
                                    </div>
                                </li>
                                <li>
                                    <div className="gap gap2">
                                        <input onClick={onClickPwSearchBtn} type="button" name='pwSearchBtn' id='pwSearchBtn' value={'비밀번호찾기'} />
                                    </div>
                                </li>
                                <li>
                                    <div className="gap gap2">
                                        <input
                                            className=''
                                            type="button"
                                            name='signinBtn'
                                            id='signinBtn'
                                            onClick={onClickGoLoginBtn1}
                                            value={'로그인'} />
                                    </div>
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
            </section>
        </main>
    );
};

