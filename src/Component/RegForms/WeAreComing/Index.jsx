import React from 'react'
import Twitter from '../../SocialIcons/Twitter/Twitter'
import Instagram from '../../SocialIcons/Instagram/Instagram'
import LinkedIn from '../../SocialIcons/LinkedIn/LinkedIn'

const Index = () => {
  return (
    <section>
        <div className='container'>
            <div>
                <h1>WE ARE COMING SOON</h1>
            </div>
            <div className='container pt-4'>
                <div className='row mt- mb-3'>
                    <div className='col-md-12 pb-3'>

                    </div>
                    <div className='container'>
                        <div className='row mt-2 mb-3'>
                            `<div className='col-md-8 pb-2'>
                                <input
                                    placeholder='Email'
                                    type='email'
                                />
                            </div>
                            <div className='col-md-4 pb-2'>
                                <button>
                                    Subscribe
                                </button>
                            </div>
                            <div className='col-md-12 pb-3'>
                                <p>We are working very hard on the new version of our site.</p>
                            </div>
                        </div>
                    </div>
                    <div className='container m-auto'>
                        <div className='row mt-2 mb-3'>
                                <button><Twitter /></button>
                                <button><Instagram /></button>
                                <button><LinkedIn /></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Index