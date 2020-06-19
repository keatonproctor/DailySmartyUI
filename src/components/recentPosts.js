import React, { Component } from 'react';

class SearchBar extends Component {
    render() {
        return (
            <div className="recent-posts">
                <div className="recent-posts__wrapper">
                    <div className="recent-posts__heading">Recent Posts</div>
                    <ul className="recent-posts__posts">
                        <li>Recent Post 0</li>
                        <li>Recent Post 1</li>
                        <li>Recent post 2</li>
                    </ul>
                </div>

            </div>
        )
    }
}

export default SearchBar;