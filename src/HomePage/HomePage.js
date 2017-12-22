import React, {Component} from 'react';
import {StyleSheet, Image, Alert} from 'react-native';
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

export default class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentDetails: ''
        }
        this.onItemClick = this
            .onItemClick
            .bind(this);
    }
    onItemClick = () => {};
    render() {
        const data = [
            {
                title: 'All time',
                detail: '5 drives recorded since Dec,2017'
            }, {
                title: 'Thu Duc (from Thu Duc)',
                detail: '12/15/2017, 1:40PM - 1:48PM'
            }, {
                title: 'Q1 (from Q1)',
                detail: '12/14/2017, 4:17PM - 4:21PM'
            }, {
                title: 'Thu Duc (from Thu Duc)',
                detail: '12/15/2017, 1:40PM - 1:48PM'
            }, {
                title: 'Q1 (from Q1)',
                detail: '12/14/2017, 4:17PM - 4:21PM'
            }, {
                title: 'Thu Duc (from Thu Duc)',
                detail: '12/15/2017, 1:40PM - 1:48PM'
            }, {
                title: 'Q1 (from Q1)',
                detail: '12/14/2017, 4:17PM - 4:21PM'
            }
        ];
        return (
            <Container>
                <Header>
                    <Left>
                        <Button transparent>
                            <Icon name='ios-person-outline'/>
                        </Button>
                    </Left>
                    <Body>
                        <Text style={styles.header_text}>Lospy</Text>
                    </Body>
                    <Right/>
                </Header>
                <Content>
                    <List
                        dataArray={data}
                        renderRow={(item) => <ListItem
                        style={{
                        backgroundColor: 'transparent'
                    }}>
                        <Button
                            transparent
                            androidRippleColor
                            onPress={() => {
                            let detail = item.detail;
                            this
                                .props
                                .navigation
                                .navigate('Detail', {time: detail});
                        }}>
                            <View>
                                <Text
                                    style={{
                                    fontSize: 18
                                }}>{item.title}</Text>
                                <Text
                                    style={{
                                    paddingLeft: 20
                                }}>{item.detail}</Text>
                            </View>
                        </Button>
                    </ListItem>}/>
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