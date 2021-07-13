import React, { useContext } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Modal,
  Pressable,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import ProductContext from '../../context/ProductContext';
import styles from './styles';

const ProductBox = ({ product }) => {
  const [modalVisible, setModalVisible] = React.useState(false);
  const [modalV, setModalV] = React.useState(false);
  const navigation = useNavigation();

  const { deleteProduto, updateProduto, valores } = useContext(ProductContext);

function chamarModal(){
  setModalV(true);
  deleteProduto(product.id);
}

  return (
    <View style={styles.Container1}>
      <View style={styles.ContainerProducts}>
        <View style={styles.DescriptionProduct}>
          <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              setModalVisible(!modalVisible);
            }}>
            <View style={styles.ViewTitle3}>
              <Text style={styles.Title3}>Detalhes do Produto</Text>
            </View>
            <View>
              <View style={styles.Cards2}>
                <View style={styles.EditDeleteIcons2}>
                  <View style={styles.centeredView}>
                    <TouchableOpacity
                      onPress={() => navigation.navigate('AtualizarProduto'), updateProduto(product.id, valores)}>
                      <AntDesign name="edit" size={30} color="blue" />
                    </TouchableOpacity>
                    <Modal
                      animationType="slide"
                      transparent={true}
                      visible={modalV}
                      onRequestClose={() => {
                        setModalV(!modalV);
                      }}>
                      <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                          <Text style={styles.modalText}>
                            Deseja excluir o produto?
                          </Text>
                          <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => setModalV(!modalV)}>
                            <Text style={styles.textStyle}>SIM</Text>
                          </Pressable>
                          <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => setModalV(!modalV)}>
                            <Text style={styles.textStyle}>NÃO</Text>
                          </Pressable>
                        </View>
                      </View>
                    </Modal>
                    <TouchableOpacity
                      onPress={() => chamarModal()}
                      style={styles.centeredView1}>
                      <AntDesign name="delete" size={30} color="red" />
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={styles.Cards3}>
                  <Image
                    style={styles.ImagemProduto2}
                    source={{ uri: product.fotoLink }}
                  />
                </View>
                <View style={styles.ViewTextCard2}>
                  <Text style={styles.TextCard2}>
                    Data de Fabricação:{' '}
                    <Text style={styles.TextCardApi}>
                      {product.dataFabricacao}
                    </Text>
                  </Text>
                  <Text style={styles.TextCard2}>
                    Descrição:{' '}
                    <Text style={styles.TextCardApi}>{product.descricao}</Text>
                  </Text>
                  <Text style={styles.TextCard2}>
                    Link da Imagem:{' '}
                    <Text style={styles.TextCardApi}>{product.fotoLink}</Text>
                  </Text>
                  <Text style={styles.TextCard2}>
                    Produto:{' '}
                    <Text style={styles.TextCardApi}>{product.nome}</Text>
                  </Text>
                  <Text style={styles.TextCard2}>
                    Categoria:{' '}
                    <Text style={styles.TextCardApi}>
                      {product.nomeCategoria}
                    </Text>
                  </Text>
                  <Text style={styles.TextCard2}>
                    Funcionário:{' '}
                    <Text style={styles.TextCardApi}>
                      {product.nomeFuncionario}
                    </Text>
                  </Text>
                  <Text style={styles.TextCard2}>
                    Quantidade em Estoque:{' '}
                    <Text style={styles.TextCardApi}>{product.qtdEstoque}</Text>
                  </Text>
                  <Text style={styles.TextCard2}>
                    Preço:{' '}
                    <Text style={styles.TextCardApi}>
                      R$ {product.valor},00
                    </Text>
                  </Text>
                </View>
              </View>
            </View>
          </Modal>
          <View style={styles.InfoProducts}>
            <TouchableOpacity onPress={() => setModalVisible(true)}>
              <Image style={styles.Lupa} source={{ uri: product.fotoLink }} />
            </TouchableOpacity>
            <View style={styles.InfoProductsText}>
              <Text>Categoria: {product.nomeCategoria}</Text>
              <Text>Nome: {product.nome}</Text>
              <Text numberOfLines={1}>Descrição: {product.descricao}</Text>
              <Text>Quantidade em Estoque: {product.qtdEstoque}</Text>
              <Text>Valor: R$ {product.valor},00</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ProductBox;
