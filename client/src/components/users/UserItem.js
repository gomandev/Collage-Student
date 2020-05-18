import React, { PureComponent } from 'react'

class UserItem extends PureComponent {

    
    
    render() {
        const displayGrid = {
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gridGap: '1rem',
      
        }
    const { id, login, avatar_url, html_url } = this.props.user;
    return (
        <>
            
            <div style={ displayGrid }>

                <div className="max-w-sm rounded overflow-hidden shadow-lg">
                    <img
                        className="w-full"
                        src={avatar_url}
                        alt=""
                        style={{ height: '300px' }}
                    />
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
                        <p className="text-gray-700 text-base">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
                        quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
                        nihil.
                        </p>
                    </div>
                </div>
            </div>
            
        </>
    )
  }
}

export default UserItem
