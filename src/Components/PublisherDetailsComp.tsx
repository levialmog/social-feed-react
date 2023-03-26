import { Row, Col, Container } from "react-bootstrap";

function getDateDiff(date: string): string {
  const now: Date = new Date();
  const publishedDate: Date = new Date(date);
  const diff: number = Math.abs(now.getTime() - publishedDate.getTime());
  const hours: number = Math.floor(diff / 1000 / 60 / 60);
  const days: number = Math.floor(hours / 24);
  if (days >= 1) {
    return `${days} ${days === 1 ? 'day' : 'days'} ago`;
  } else {
    return `${hours} ${hours === 1 ? 'hour' : 'hours'} ago`;
  }
}

function PublisherDetailsComp(props: { userName: string, shopName: string, avatar:string, date: string } ): JSX.Element {
  const timeDiff = getDateDiff(props.date);

  return (
    <div className="PublisherDetailsComp">
      <Container>
        <Row>
          <Col xs={12} md={2} lg={1}>
            <div className="mb-3">
                <img
                alt="avatar"
                src={props.avatar}
                width="70"
                height="70"
                style={{ borderRadius: "50%", border: "2px solid black" }}
                />
            </div>
          </Col>

          <Col xs={12} md={6} lg={7}>
              <div className="ms-lg-4">
                <h4>{props.userName}</h4>
                <h6 className="text-primary">{props.shopName}</h6>
              </div>
          </Col>

          <Col xs={12} md={4}>
            <div style={{ position: 'absolute', top: 0, right: 0 }}>
              <p className="p-3">{timeDiff}</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default PublisherDetailsComp;
