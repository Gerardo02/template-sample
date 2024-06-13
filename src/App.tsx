import { Button, Layout, Menu, MenuProps } from "antd";
import React, { useEffect, useState } from "react";
import { MailOutlined, AppstoreOutlined, SettingOutlined, LeftOutlined, RightOutlined } from '@ant-design/icons';
import './App.css'

const { Header, Footer, Sider, Content } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

const layoutStyle2: React.CSSProperties = {
  overflow: 'auto',
};

const items: MenuItem[] = [
  {
    label: 'Navigation One',
    key: '1',
    icon: <MailOutlined />,
    style: {height: '60px'}
  },
  {
    label: 'Navigation Two',
    key: '2',
    icon: <AppstoreOutlined />,
    style: {height: '60px'}
  },
  {
    label: 'Navigation Three',
    key: '3',
    icon: <SettingOutlined />,
    style: {height: '60px'}
  },
  {
    label: 'Navigation Four',
    key: '4',
    icon: <AppstoreOutlined />,
    style: {height: '60px'}
  },
  {
    label: 'Navigation Five',
    key: '5',
    icon: <AppstoreOutlined />,
    style: {height: '60px'}
  },
  {
    label: 'Navigation Five',
    key: '5',
    icon: <AppstoreOutlined />,
    style: {height: '60px'}
  },
  {
    label: 'Navigation Five',
    key: '5',
    icon: <AppstoreOutlined />,
    style: {height: '60px'}
  },
  {
    label: 'Navigation Five',
    key: '5',
    icon: <AppstoreOutlined />,
    style: {height: '60px'}
  },
  {
    label: 'Navigation Five',
    key: '5',
    icon: <AppstoreOutlined />,
    style: {height: '60px'}
  },
];

function App() {

  const [current, setCurrent] = useState('1');
  const [collapsedIcon, setCollapsedIcon] = useState(<LeftOutlined />);
  const [collapsed, setCollapsed] = useState(false);

  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };

  useEffect(() => {
    setCollapsedIcon(<LeftOutlined />);

    if(collapsed) {
      setCollapsedIcon(<RightOutlined />);
    }
  }, [collapsed])

  const collapseSider = () => {
    setCollapsed((e) => !e);
  }

  return (
    <div>
      <Layout className="main-layout">
        <Sider className="sider-layout" collapsed={collapsed} style={{backgroundColor: 'white'}}>
          <Button className="collapse-button" onClick={collapseSider}>{collapsedIcon}</Button>
          <Menu
            className="sider-menu"
            onClick={onClick}
            mode="inline"
            selectedKeys={[current]}
            inlineIndent={10}
            items={items}
          />
        </Sider>
        <Layout className="child-layout" style={layoutStyle2}>
          <Header className="header-layout" >Header</Header>
          <Content className="content-layout">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias culpa incidunt expedita quia? Provident architecto dolorum at asperiores laudantium enim nobis quos quam! Sit soluta exercitationem laudantium enim odio ratione.
            Aliquam autem ea dicta fugiat beatae placeat a iusto eligendi nisi quia error quo architecto esse nesciunt, quaerat magnam excepturi enim perferendis dolores nam laborum natus magni cupiditate! Nesciunt, velit!
            Dignissimos alias dolores, dolorem fuga eos labore. Odio veniam, aliquid sequi blanditiis voluptatibus ipsa repellendus id? Nisi eum voluptatem iure sit ad, debitis dolorem? Alias ipsam voluptatum animi assumenda repellat?
            Labore obcaecati dolorum quia provident maiores. Sunt ducimus iste inventore quod recusandae temporibus sint voluptate dolor aliquam. Odio laborum quo reiciendis nisi ut consequatur deleniti doloribus, amet, et cumque natus?
            Nulla consequatur laborum doloremque labore aspernatur veritatis soluta pariatur neque inventore qui et eos veniam iure fugiat voluptates modi, odio vero quod nam culpa quos dolores? Fuga repellat impedit tenetur.
            Temporibus, numquam, sed perferendis nobis, magnam nisi optio veniam explicabo suscipit enim dignissimos voluptatibus facere reprehenderit deleniti. Dolor, fuga qui! Aut fugit ad laboriosam corporis earum, atque delectus cupiditate enim?
            Adipisci commodi nam exercitationem recusandae, culpa ea velit illo eos in nemo, vel maiores voluptas minus cupiditate officiis fugiat facere eum! Voluptatum dicta qui nisi distinctio id esse, odit temporibus?
            Enim sed ab laudantium totam eveniet quos vero officia ipsum, perferendis alias officiis similique nulla magnam dolorum rerum iste odit sequi! Illum sunt necessitatibus alias cumque aliquam, quam optio mollitia.
            Consequuntur voluptatum ipsam impedit consectetur? Quis voluptate debitis porro eius obcaecati id maxime ex quod ut totam soluta adipisci, recusandae dolore in distinctio, assumenda blanditiis, reprehenderit ipsam facilis temporibus mollitia!
            Assumenda expedita dolorem error eum iure consequatur inventore saepe quae, commodi possimus provident tenetur iusto aliquid, quibusdam odit? Deleniti suscipit eos nostrum debitis voluptate corrupti sequi ullam earum aperiam nihil.
            Odit repudiandae sint, quos voluptatum nobis voluptas pariatur porro quis quisquam vero ullam nostrum delectus molestiae ducimus dolore et distinctio saepe fugit laborum sunt eum? Doloribus quasi quas perferendis eum.
            Possimus molestias sit, quidem assumenda in at facilis harum, numquam voluptatum error perferendis magnam fugit. Magnam ipsa quis temporibus deserunt id cupiditate tempora aliquid fuga vel, cumque eveniet? Expedita, eum?
            Omnis modi qui similique, nesciunt id quibusdam expedita a quo architecto consequuntur autem. Modi, expedita quidem. Culpa adipisci cupiditate magni quas. Doloribus dignissimos delectus suscipit fugit omnis asperiores sit excepturi.
            Eaque blanditiis sed pariatur voluptates deleniti placeat at repudiandae eligendi ea provident labore impedit rem illo sint, voluptatum odio, error cum, dignissimos animi quidem. Labore aperiam illo rem corrupti explicabo?
            Reprehenderit, impedit pariatur? Aliquam, porro? Assumenda delectus reprehenderit eum culpa hic atque animi ipsa. Impedit, iusto provident fugiat sapiente quam consequatur optio enim beatae totam? Rem impedit culpa quibusdam at.
            Mollitia accusamus eos ex perferendis placeat id, a nisi, unde illo, quo veritatis. Fugiat corrupti molestias provident illum eius, quod eum hic possimus sunt consequatur ipsam, nostrum magni exercitationem porro.
            Ea aperiam expedita alias eligendi distinctio hic modi ut iste autem consequuntur sequi deserunt aut illo incidunt porro ex perspiciatis ipsa nemo, iusto cumque quia. Excepturi, obcaecati voluptate? Quae, iure!
            Quaerat ipsam ea odit est aut beatae similique rem id laboriosam explicabo soluta a nesciunt blanditiis, esse nobis, repudiandae, perferendis consequatur aliquam cumque. Perspiciatis suscipit illo earum quaerat, est laborum.
            Recusandae, fugit libero tenetur magni molestias eligendi sit dolorem laboriosam vero quas impedit labore culpa odio at molestiae maiores nostrum quo itaque nam consequuntur. Nulla quia totam nihil suscipit amet.
            Sint nulla accusamus doloribus tempora rerum natus corporis, cumque pariatur animi saepe ea ullam et consequuntur obcaecati aperiam molestiae. Quibusdam provident praesentium exercitationem rerum iusto doloribus eum quaerat enim. A!
            Voluptates soluta assumenda, iure nesciunt, voluptatem dicta pariatur maiores ab ipsum nisi non adipisci repudiandae quos illo perferendis libero! Natus fugiat odit possimus? Deserunt ipsum itaque officiis molestiae consectetur quae.
            Quaerat magnam maiores ipsa blanditiis, perspiciatis sunt veritatis eum? Labore impedit voluptate, consequuntur alias asperiores ex in necessitatibus nemo minima et cupiditate consectetur illo aut eaque animi. Velit, eos? Dolores.
            Ex cumque, deleniti iure alias blanditiis, perspiciatis tempora veritatis deserunt eum enim quod explicabo? Optio facere, quibusdam blanditiis tempora tenetur accusantium sunt nesciunt perferendis maxime, consectetur recusandae distinctio eveniet quaerat.
            Beatae rem laborum at ipsam mollitia voluptate possimus animi consequatur ipsum saepe, dignissimos blanditiis, impedit nulla doloribus? Aperiam autem beatae quibusdam provident commodi atque libero, ipsam eaque non temporibus officia.
            Praesentium cupiditate totam enim eaque voluptatum fugiat rem non consequuntur magnam nesciunt sit, cumque vel nobis accusamus, dicta perferendis suscipit repellat beatae delectus officiis facilis amet eos ipsum fuga? Aperiam.
            Soluta aspernatur commodi sit quos, et assumenda in eaque architecto animi, quasi, enim voluptatum velit. Porro incidunt labore eum laudantium sapiente obcaecati nemo impedit veritatis sit, esse expedita? Nesciunt, quis.
            Facere, ratione sequi, sint tempore animi neque magnam doloribus fuga repellat nulla blanditiis, distinctio dicta nostrum possimus. Sequi ipsam quis unde assumenda numquam velit accusamus et temporibus iste. Quasi, nam?
            Temporibus soluta recusandae mollitia consectetur id quo inventore? Ducimus, odit consectetur. Cupiditate numquam officiis molestias sint distinctio labore pariatur illo aut libero dolorem! Consequuntur eos reprehenderit nemo voluptatibus sint neque?
            At aut reprehenderit non autem assumenda reiciendis numquam architecto, illo, voluptates rerum tenetur neque recusandae temporibus officia beatae. Soluta fugiat totam minus. Amet adipisci perspiciatis sunt quo suscipit labore ad?
            Iusto non ratione mollitia perspiciatis! Aut nobis mollitia, sapiente nemo quidem quibusdam inventore nisi reiciendis odit voluptas, veniam dolorem laborum aliquam. Voluptatem autem, quidem corrupti dolore omnis est harum nesciunt!
            A, consequuntur similique ipsum fugit enim quos assumenda placeat unde saepe praesentium quae ea, et natus? Quas suscipit nisi magni facilis qui id, perferendis non totam incidunt. Tempore, impedit. Eos.
            Minima expedita, libero velit cumque, aut doloremque eligendi ab aspernatur optio, possimus nam laudantium ipsa soluta et rerum tempora facilis commodi quos dolorum officia? Accusantium hic at aspernatur voluptates reprehenderit.
            Enim nam voluptates consectetur temporibus repudiandae eaque provident mollitia explicabo? Officia natus doloremque quam consequatur quos, voluptatem, eligendi debitis id quia doloribus iste, provident temporibus reiciendis similique error earum assumenda.
            Mollitia error rerum autem sequi doloremque est ut nesciunt officiis eveniet quaerat. Debitis reiciendis adipisci soluta voluptatum totam voluptatem voluptates quis culpa optio. Eum, ab natus itaque officiis voluptatum voluptate.
            Quo eius voluptas voluptatibus architecto. Eos, provident soluta. Ipsa, laboriosam ea tempore doloribus nesciunt esse distinctio obcaecati nobis sint omnis tenetur, sequi illum tempora asperiores delectus repudiandae consequuntur, placeat accusamus.
            Ad, amet? Deserunt, excepturi voluptatibus ipsam ex repudiandae ducimus magnam dicta quis voluptate sunt nostrum? Ullam, voluptates mollitia reiciendis sed perspiciatis asperiores, modi distinctio reprehenderit nobis, pariatur labore placeat neque?
            Atque eum blanditiis consectetur quo qui cupiditate dolorem consequuntur quaerat, eligendi eaque itaque rem, sed ab repudiandae aspernatur dignissimos tempora consequatur, impedit error assumenda. Voluptatibus ex molestiae perspiciatis veritatis ipsum.
            Rem nulla laboriosam tenetur officiis soluta consequuntur praesentium, sunt dolore itaque qui, id vero quia sit accusamus distinctio? Facere dolore ex ab quod, consectetur minus nostrum! Nihil dolores consectetur corrupti.
            Ut eaque molestiae animi dolores nulla eveniet officia sunt vitae repudiandae doloremque. Tenetur nobis quae praesentium, rerum obcaecati perspiciatis numquam dolores voluptatem sint ea. Explicabo ex harum reiciendis consequatur repudiandae.
            Voluptatibus maxime recusandae qui quae odio fuga dolore, officia minima modi iure voluptatem! Maiores, in? Delectus ab cum debitis dolorum tempora quam, blanditiis pariatur porro ipsum qui nesciunt perspiciatis at!
            Natus esse recusandae molestias deleniti illo rem. Voluptates, unde consequuntur cupiditate dolorem ab sapiente ratione maiores tempore dolores. Accusantium expedita ea in sed natus autem sit vero et quisquam atque.
            Ducimus blanditiis expedita iure perspiciatis excepturi, deleniti, a eos reiciendis ipsum distinctio dolore ex odio repellat quaerat magnam ratione laudantium iste corporis, accusantium sint consequatur esse rerum tempora. Ipsa, quod?
            Pariatur similique cupiditate nam, molestias reprehenderit non nisi deleniti repudiandae quam veniam. Et dolores maiores totam id. Sunt, quae, delectus aut voluptatem neque consectetur eius tenetur earum quia qui culpa.
            Tempora eos nesciunt natus, quod ex aliquid quo recusandae excepturi soluta consequuntur! Eos mollitia vel voluptatum inventore architecto fuga tempore illum temporibus maiores vitae nulla eligendi consectetur, quam porro obcaecati!
            Necessitatibus saepe fugit ducimus qui quasi, odio blanditiis quidem in modi illo quisquam voluptas consequatur quibusdam molestiae ab deserunt iusto ea veniam corrupti reprehenderit enim? Eius enim quod aperiam consectetur.
            Sed modi fuga deserunt eos at eum expedita laboriosam cumque. Animi velit a sit nobis vel facilis nemo, est repellendus modi non maiores aperiam vitae, quos perferendis ipsam in consequatur.
            Laboriosam, veritatis molestiae. Laudantium, culpa aspernatur iure tempore adipisci ducimus voluptates rerum corporis veritatis cumque molestias porro nihil sequi modi deserunt vel ea aut? Dicta dignissimos tempora ut quas reiciendis.
            Incidunt saepe optio, eos beatae ut veniam consequuntur eius corporis sequi rem enim corrupti maxime doloremque repellendus dolorem non recusandae et, qui animi magni iusto fuga nobis laborum rerum. At?
            Iste soluta laboriosam nostrum magnam nesciunt adipisci obcaecati hic, tempora consequatur voluptas harum mollitia quam, rem amet? Consequatur qui quas eum tempore blanditiis aperiam, hic, perferendis vitae cum, incidunt magni!
            Cumque voluptates, modi sit dolorum, earum sed illo nemo nulla architecto, voluptas eveniet nihil sunt possimus mollitia consectetur neque unde perferendis! Asperiores veritatis veniam facere quos ad ratione odio repellat.
            <Footer className="footer-layout" >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa, inventore. Nobis asperiores fugiat quasi alias suscipit ut in consectetur accusamus fuga repellat tempora, sunt numquam temporibus dolorum. Reiciendis, quae ad.
            Cupiditate id officiis exercitationem explicabo omnis saepe in sequi possimus necessitatibus animi? Itaque sit odit doloremque nesciunt fugit, nobis optio earum eaque rerum? Enim impedit quod ad recusandae, culpa non.</Footer>
          </Content>
        </Layout>
        

      </Layout>
    </div>
  )
}

export default App;
