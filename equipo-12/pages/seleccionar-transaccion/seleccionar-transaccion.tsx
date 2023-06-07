
interface PropsType {
  children?: ReactNode;
}

const ListCard: NextPageWithLayout<PropsType> = () => {
  return (
    <>
      <Box
        sx={{
          width: "276px",
          height: "100%",
          backgroundColor: "#C1FD35",
          "@media (max-width: 768px)": {
            display: "none",
          },
        }}
      ></Box>
      <Box sx={{
        height: "100%",
        width: "100vw",
        backgroundColor: "#EEEAEA",
        paddingLeft: "100px",
        paddingTop: "50px",
        paddingBottom: "50px",
        paddingRight: "50px",
        "@media (max-width: 768px)": {
          paddingLeft: "20px",
          paddingRight: "20px",
        },
      }}
      >

        <Box sx={{
          marginBottom: "1rem",
        }}
        >
          <ArrowSubtitleMobile title="Tarjetas" />
          <AddCard />
        </Box>
        <Box sx={{
          marginBottom: "1rem",
        }} >
          <ListCards />
        </Box>

      </Box>
    </>
  );
};

ListCard.getLayout = function getLayout(page: ReactElement) {
  return <Layout variant="home">{page}</Layout>;
};

export default ListCard;