import React, { useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import withRouter, { Router } from '../../components/hoc/withRouter';
import { strings } from '../../localisation/strings';

import ElasticSearchBar from '../../components/search/ElasticSearchBar';
import NavTabs from '../../components/navtabs/NavTabs';
import FeedCard from '../../components/feed/FeedCard';

import '../../scss/global.scss'
import './Home.scss'

interface Props {
    router: Router;
}

function Home(props: Props) {
    const { router } = props;

    const { feed } = useSelector((state: any) => state.feed);
    const [textSearch, setTextSearch] = useState<string>('');
    const searchBarRef = useRef(null);

    return (
        <div className='home-container'>
            <div className='view-content-header'>
                <ElasticSearchBar
                    placeholder={strings.search}
                    onChange={(searchQuery) => {
                        setTextSearch(searchQuery)
                    }}
                    onRef={(ref: any) => {
                        searchBarRef.current = ref;
                    }}
                    initialValue={textSearch}
                />
                <NavTabs/>
            </div>
            <div className='content'>
                {feed.map((item: any, index: number) => {
                    return <FeedCard key={index} item={item} />;
                })}
            </div>
        </div>
    );
};

export default withRouter(Home);
