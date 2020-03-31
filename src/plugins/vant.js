import Vue from 'vue'
import { Tabbar, TabbarItem } from 'vant'
import { Icon } from 'vant'
import { NavBar } from 'vant'
import { Tab, Tabs } from 'vant'
import { DropdownMenu, DropdownItem } from 'vant'
import { Cell } from 'vant'
import { IndexBar, IndexAnchor } from 'vant'
import { Grid, GridItem } from 'vant'
import { Col, Row } from 'vant'
import { Search } from 'vant'
import { Loading } from 'vant'
import { PullRefresh } from 'vant'
import { Toast } from 'vant'
import { Form } from 'vant'
import { Field } from 'vant'
import { Button } from 'vant'
import { Dialog } from 'vant'
Vue.use(Button)
Vue.use(Field)
Vue.use(Form)
Vue.use(Toast)
Vue.use(PullRefresh)
Vue.use(Loading)
Vue.use(Search)
Vue.use(Col)
Vue.use(Row)
Vue.use(Grid)
Vue.use(GridItem)
Vue.use(IndexBar)
Vue.use(IndexAnchor)
Vue.use(Cell)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)
Vue.use(Tab)
Vue.use(Tabs)
Vue.use(Tabbar)
Vue.use(TabbarItem)
Vue.use(Icon)
Vue.use(NavBar)
Vue.prototype.$toast = Toast
