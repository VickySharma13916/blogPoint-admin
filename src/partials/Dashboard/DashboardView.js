import React from "react";
import { Card, Row, Spinner } from "react-bootstrap";
import { connect } from "react-redux";
import { performGetDashboardDetails } from "../../redux/actionCreators/dashboardCreators";

const DashboardView = ({ fetching, getDashboardDetails }) => {
  // const [dashboardData, setDashboardData] = useState([]);
  // const handleDashboardDetail = async () => {
  //   const result = await getDashboardDetails();
  //   if (result.status) {
  //     setDashboardData(result?.data);
  //   }
  // };

  // useEffect(() => {
  //   handleDashboardDetail();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  // const TileDashboard = ({ dashboardName, dashboardCount }) => {
  //   return (
  //     <>
  //       <div className="single_dashboard">
  //         <div className="single_dashboard_name">{dashboardName}</div>
  //         <div className="single_dashboard_count">{dashboardCount}</div>
  //       </div>
  //     </>
  //   );
  // };

  // const {
  //   productInCart,
  //   productInWishlist,
  //   publicLists,
  //   privateLists,
  //   products,
  //   users,
  //   referredUsers,
  //   activeUsers,
  // } = dashboardData;

  return (
    <>
      <h1>Dashboard</h1>
      {fetching ? (
        <div className="spinner-data">
          <Spinner animation="border" variant="primary" role="status" />
        </div>
      ) : (
        <>
          <Card
            border="light"
            className="w-100 mx-auto py-3 px-3 mb-5 position-relative"
          >
            <Card.Body>
              <Row>
                {/* <Col className="d-flex flex-wrap p-0 gap-3">
                  <TileDashboard
                    dashboardName={"Users"}
                    dashboardCount={users}
                  />
                  <TileDashboard
                    dashboardName={"Active Users"}
                    dashboardCount={activeUsers}
                  />
                  <TileDashboard
                    dashboardName={"Referred Users"}
                    dashboardCount={referredUsers}
                  />
                  <TileDashboard
                    dashboardName={"Products"}
                    dashboardCount={products}
                  />
                </Col> */}
              </Row>
              <Row className="mt-3">
                {/* <Col className="p-0">
                  <div className="Bar_chart">
                    <DashboardChart
                      data1={publicLists}
                      data2={privateLists}
                      text1={"Public List"}
                      text2={"Private List"}
                      titleText={"Public and Private Lists"}
                    />
                  </div>
                </Col>
                <Col className="p-0">
                  <div className="Bar_chart">
                    <DashboardChart
                      data1={productInWishlist}
                      data2={productInCart}
                      text1={"Product in Wishlist"}
                      text2={"Product in Cart"}
                      titleText={"Products in Wishlist and Cart"}
                    />
                  </div>
                </Col> */}
              </Row>
            </Card.Body>
          </Card>
        </>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  // fetching: state.dashboard.fetching,
});

const mapDispatchToProps = (dispatch) => ({
  getDashboardDetails: (payload) =>
    dispatch(performGetDashboardDetails(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DashboardView);
