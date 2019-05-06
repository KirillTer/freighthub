import React from 'react'
import Navigation from '../../components/navigation/'

const Layout = ({children}) => (<>
    <Navigation />
    <div className='view-container'>
        <div className='container'>
            <div className='row'>
                <div className='col-md-12'>
                    {children}
                </div>
            </div>
        </div>
    </div>
</>)

export default Layout