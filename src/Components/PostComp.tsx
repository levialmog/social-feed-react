import { Row, Col, Container, Card } from "react-bootstrap";
import PublisherDetailsComp from "./PublisherDetailsComp";
import PostContentComp from "./PostContentComp";
import FooterPostComp from "./FooterPostComp";
import { postDetails } from "../Services/PostDetails";

interface PostCompProps {
  postDetails: postDetails;
}

function PostComp({ postDetails }: PostCompProps): JSX.Element {
  return (
    <div className="PostComp">
      <Container fluid>
        <Row className="justify-content-center">
          <Col xs={12} md={8}>
            <Card className="bg-light border border-secondary mx-auto p-3 mb-5">
              <Card.Body>
                <PublisherDetailsComp
                  userName={postDetails.username}
                  shopName={postDetails.shopName}
                  avatar={postDetails.avatar}
                  date={postDetails.date}
                />
                
                <PostContentComp
                  images={postDetails.images}
                  text={postDetails.text}
                />
              
                <Row>
                  <Col>
                    <FooterPostComp
                      likes={postDetails.likes}
                      comments={postDetails.comments}
                    />
                  </Col>
                </Row> 
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default PostComp;
