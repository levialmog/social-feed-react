import { Row, Col, Container } from "react-bootstrap";
import { useState, useEffect, useRef } from "react";
import PostComp from "./PostComp";
import NavbarComp from "./NavbarComp";
import { postDetails } from "../Services/PostDetails";
import { getPostsDetails, getUserViewItem } from "../Services/Utils";
import loadingSpinner from "../Images/Gif.gif";

function FeedComp(): JSX.Element {
  const [postsDetails, setPostsDetails] = useState<postDetails[]>([]);
  const [skip, setSkip] = useState<number>(0);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect((): void => {
    async function fetchPostsDetails(): Promise<void> {
      setIsLoading(true);
      const details = await getPostsDetails(skip);
      setPostsDetails(prevPosts => [...prevPosts, ...details.data.data]);
      setHasMore(details.data.hasMore);
      setIsLoading(false);
    }
    fetchPostsDetails();
  }, [skip]);

  useEffect(() => {
    function handleScroll(): void {
      if (
        window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.offsetHeight
      ) {
        if (hasMore) {
          setSkip(skip + 6);
        }
      }
    }

    window.addEventListener("scroll", handleScroll);
    return (): void => window.removeEventListener("scroll", handleScroll);
  }, [skip, hasMore]);

  return (
    <div className="FeedComp">
      <Container fluid>
        <Row className="mb-5">
          <Col>
            <NavbarComp />
          </Col>
        </Row>

        <Row>
          <Col>
            {postsDetails.map((post) => (
              <PostComp key={post.id} postDetails={post}/>
            ))}
          </Col>
        </Row>
        
        {isLoading && (
          <Row className="text-center mb-4">
            <Col>
              <img src={loadingSpinner} alt="Loading..." width="25" height="25" />
            </Col>
          </Row>
        )}

        {!hasMore && (
          <Row className="text-center mb-4">
            <Col>
              <p>No more posts to load</p>
            </Col>
          </Row>
        )}
      </Container>
    </div>
  );
}

export default FeedComp;
