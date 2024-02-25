import { useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import withRouter from '../../components/hoc/withRouter';
import { strings } from '../../localisation/strings';
import { FeedState } from '../../redux/slice/feedSlice';

import ElasticSearchBar from '../../components/search/ElasticSearchBar';
import NavTabs from '../../components/navtabs/NavTabs';
import FeedCard from '../../components/feed/FeedCard';

import '../../scss/global.scss';
import './Home.scss';

function Home() {
    const { feed } = useSelector((state: any) => state.feed as FeedState);
    const [textSearch, setTextSearch] = useState<string>('');
    const searchBarRef = useRef(null);
    // const [count, setCount] = useState(5);
    // const [hasMoreItems, setHasMoreItems] = useState(count < feed.length);

    // useEffect(() => {
    //     console.log(count);
    // }, [count]);

    // function nextPage() {
    //     const newCount = count + 10;
    //     const hasMoreItems = newCount < feed.length;
    //     setCount(hasMoreItems ? newCount : feed.length);
    //     setHasMoreItems(hasMoreItems);
    // }

    return (
        <div className="home-container">
            <div className="view-content-header">
                <ElasticSearchBar
                    placeholder={strings.search}
                    onChange={(searchQuery) => {
                        setTextSearch(searchQuery);
                    }}
                    onRef={(ref: any) => {
                        searchBarRef.current = ref;
                    }}
                    initialValue={textSearch}
                />
                <NavTabs />
            </div>
            <div className="content">
                {feed.map((item: any, index: number) => {
                    return <FeedCard style={{}} key={index} item={item} />;
                })}
            </div>
        </div>
        //  <Feed hasMore={hasMoreItems} feedItems={feed.slice(0, count)} next={nextPage} />
    );
}

export default withRouter(Home);
