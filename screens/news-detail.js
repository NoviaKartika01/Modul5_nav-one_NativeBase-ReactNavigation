import React from "react";
import { Image, Heading, Text, ScrollView } from "native-base";
import { Header } from "../components";
import datas from "../datas"; // Import data dari datas.js

const NewsDetail = ({ route }) => {
  const { itemId } = route.params;

  const newsItem = datas.find(item => item.id === itemId);

  if (!newsItem) {
    // Handle kasus jika item tidak ditemukan
    return (
      <>
        <Header title="News" withBack={true} />
        <Text>News not found</Text>
      </>
    );
  }

  return (
    <>
      <Header title="News" withBack={true} />
      <ScrollView p={4}>
        <Image
          source={{ uri: newsItem.image }}
          alt="News Image"
          w="full"
          h={200}
          mt={4}
        />
        <Text fontSize="sm" color="gray.500" mt={2}>
          {newsItem.date}
        </Text>
        <Heading fontSize="xl">{newsItem.title}</Heading>
        <Text fontSize="md" mt={4}>
          {newsItem.content}
        </Text>
      </ScrollView>
    </>
  );
};

export default NewsDetail;

// kode lama (dari modul)
// import { Heading, Center, Text } from "native-base";
// import { Header } from "../components";

// const NewsDetail = ({ route }) => {
//   // Get the params
//   const params = route.params.item;
//   return (
//     <>
//       <Header title={"News"} withBack="true" />
//       <Center flex={1} p={"4"}>
//         <Heading>News Detail</Heading>
//         <Text textAlign={"center"}>{params.title}</Text>
//       </Center>
//     </>
//   );
// };

// export default NewsDetail;


