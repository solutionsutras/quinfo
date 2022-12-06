import { View, Text, Image, TouchableOpacity, ScrollView, FlatList } from 'react-native'
import { COLORS, SIZES, SHADOWS, assets, FONTS } from '../constants'
import { CircleButton } from './Button'
// import React, { useState } from 'react';

const InfoCard = () => {

    // const CardData = useState([
    //     {
    //         id: "NFT-01",
    //         name: "Bus Info",
    //         image: assets.bus,
    //     },
    //     {
    //         id: "NFT-02",
    //         name: "Doctor Info",
    //         image: assets.doctor,
    //     },
    //     {
    //         id: "NFT-03",
    //         name: "Travels Info",
    //         image: assets.travels,
    //     },
    //     {
    //         id: "NFT-04",
    //         name: "Social Info",
    //         image: assets.social,
    //     },
    //     {
    //         id: "NFT-05",
    //         name: "Culture Info",
    //         image: assets.culture,
    //     },
    //     {
    //         id: "NFT-06",
    //         name: "Govt. Notification",
    //         image: assets.govt,
    //     }
    // ])

    return (
        <View>
            {/* <FlatList
                data={CardData}
                renderItem={({ item }) => ( */}
                    <TouchableOpacity style={{
                        backgroundColor: COLORS.white,
                        borderRadius: SIZES.font,
                        marginBottom: SIZES.extraLarge,
                        margin: SIZES.base,
                        ...SHADOWS.dark,
                        cursor: 'pointer',
                    }}
                    >
                        <View style={{ width: '100%', height: 250 }}>
                            <Image
                                source={assets.bus}
                                resizeMode='cover'
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    borderTopLeftRadius: SIZES.font,
                                    borderTopRightRadius: SIZES.font
                                }}
                            />
                            <CircleButton imgUrl={assets.heart} right={10} top={10} />
                        </View>
                        <View style={{
                            alignItems: 'center',
                            paddingBottom: 20,
                            paddingTop: 20
                        }}>
                            <Text style={{ fontSize: SIZES.large, fontWeight: 'bold' }}>Bus Info</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={{
                        backgroundColor: COLORS.white,
                        borderRadius: SIZES.font,
                        marginBottom: SIZES.extraLarge,
                        margin: SIZES.base,
                        ...SHADOWS.dark,
                        cursor: 'pointer',
                    }}
                    >
                        <View style={{ width: '100%', height: 250 }}>
                            <Image
                                source={assets.travels}
                                resizeMode='cover'
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    borderTopLeftRadius: SIZES.font,
                                    borderTopRightRadius: SIZES.font
                                }}
                            />
                            <CircleButton imgUrl={assets.heart} right={10} top={10} />
                        </View>
                        <View style={{
                            alignItems: 'center',
                            paddingBottom: 20,
                            paddingTop: 20
                        }}>
                            <Text style={{ fontSize: SIZES.large, fontWeight: 'bold' }}>Travels Info</Text>
                        </View>
                    </TouchableOpacity>
                {/* )}
            /> */}
        </View>
    )
}

export default InfoCard;