import React, {Component} from 'react';
import {StyleSheet, Image} from 'react-native';
import {
    Header,
    Footer,
    FooterTab,
    Button,
    Icon,
    View,
    List,
    ListItem,
    Left,
    Right,
    Body,
    Text,
    Container,
    Content
} from 'native-base';

export default class DetailPage extends Component {
    render() {
        const {params} = this.props.navigation.state;
        return (
            <Container>
                <Header>
                    <Left>
                        <Button transparent onPress={() => this.props.navigation.goBack(null)}>
                            <Icon name='ios-arrow-back'/>
                        </Button>
                    </Left>
                    <Body>
                        <Text style={styles.header_text}>{params.time}</Text>
                    </Body>
                    <Right/>
                </Header>
                <Content>
                    <Image
                        source={require('../Images/map.png')}
                        style={{
                        height: 410
                    }}/>
                    <View style={{}}>
                        <Text
                            style={{
                            textAlign: 'center',
                            fontSize: 20,
                            margin: 20,
                            paddingBottom: 10,
                            borderWidth: 1,
                            borderColor: 'transparent',
                            borderBottomColor: 'black'
                        }}>Details from this drive</Text>
                        <View
                            style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            paddingLeft: 20,
                            paddingRight: 20,
                            marginBottom: 10
                        }}>
                            <View>
                                <Text
                                    style={{
                                    textAlign: 'center'
                                }}>2.8</Text>
                                <Text>kilometers</Text>
                            </View>
                            <View>
                                <Text
                                    style={{
                                    textAlign: 'center'
                                }}>7</Text>
                                <Text>minutes</Text>
                            </View>
                            <View>
                                <Text
                                    style={{
                                    textAlign: 'center'
                                }}>7</Text>
                                <Text>points</Text>
                            </View>
                        </View>
                    </View>
                </Content>
                <Footer>
                    <FooterTab>
                        <Button>
                            <Icon name='ios-car'/>
                            <Text>Your drives</Text>
                        </Button>
                        <Button>
                            <Icon name='ios-car'/>
                            <Text>Your drives</Text>
                        </Button>
                        <Button>
                            <Icon name='ios-car'/>
                            <Text>Your drives</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        );
    }
};

const styles = StyleSheet.create({
    header_text: {
        color: '#FFFFFF'
    }
});