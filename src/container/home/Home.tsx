import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import withRouter from '../../components/hoc/withRouter';
import { strings } from '../../localisation/strings';
import { FeedState, searchFeedUpdate } from '../../redux/slice/feedSlice';

import ElasticSearchBar from '../../components/search/ElasticSearchBar';
import NavTabs from '../../components/navtabs/NavTabs';
import FeedCard from '../../components/feed/FeedCard';

import '../../scss/global.scss';
import './Home.scss';

/**
 * The home component that displays the feed and search bar and filter tabs
 * @returns Home component
 */
function Home() {
    const { feed } = useSelector((state: any) => state.feed as FeedState);
    const dispatch = useDispatch();
    const searchBarRef = useRef(null);

    return (
        <div className="home-container">
            <div className="view-content-header">
                <ElasticSearchBar
                    placeholder={strings.search}
                    onChange={(searchQuery) => {
                        dispatch(searchFeedUpdate(searchQuery));
                    }}
                    onRef={(ref: any) => {
                        searchBarRef.current = ref;
                    }}
                    initialValue={''}
                />
                <NavTabs />
            </div>
            <div className="content">
                {feed.length ? (
                    feed.map((item: any, index: number) => {
                        return <FeedCard key={index} item={item} />;
                    })
                ) : (
                    <div className="no-results">{strings.no_results}</div>
                )}
                {/* 
                    Future Improvement: To use infinite scroll instead and react-window list to improve performance
                    <Feed hasMore={hasMoreItems} feedItems={feed.slice(0, count)} next={nextPage} /> 
                */}
            </div>
        </div>
    );
}

export default withRouter(Home);
