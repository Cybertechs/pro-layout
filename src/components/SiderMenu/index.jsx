import './index.less'

import { Drawer } from 'ant-design-vue'
import SiderMenu, { SiderMenuProps } from './SiderMenu'

const SiderMenuWrapper = {
  name: 'SiderMenuWrapper',
  model: {
    prop: 'collapsed',
    event: 'collapse'
  },
  props: SiderMenuProps,
  render (h) {
    const {
      layout,
      collapsed
    } = this
    const isTopMenu = layout === 'topmenu'
    const handleCollapse = (e) => {
      this.$emit('collapse', true)
    }
    return this.isMobile ? (
      <Drawer
        class="ant-pro-sider-menu"
        visible={!collapsed}
        placement="left"
        maskClosable
        getContainer={undefined}
        onClose={handleCollapse}
        bodyStyle={{
          padding: 0,
          height: '100vh'
        }}
      >
        <SiderMenu {...{ props: {...this.$props, collapsed: this.isMobile ? false : collapsed} }} />
      </Drawer>
    ) : !isTopMenu && (
      <SiderMenu class="ant-pro-sider-menu" {...{ props: this.$props }} />
    )
  }
}

SiderMenuWrapper.install = function (Vue) {
  Vue.component(SiderMenuWrapper.name, SiderMenuWrapper)
}

export {
  SiderMenu,
  SiderMenuProps
}

export default SiderMenuWrapper
