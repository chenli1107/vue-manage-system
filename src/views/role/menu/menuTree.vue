<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>
                    <i class="el-icon-lx-calendar"></i> 用户权限管理
                </el-breadcrumb-item>
                <el-breadcrumb-item>菜单按钮管理</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            {{data}}
            <el-tree
            :data="data"
            show-checkbox
            node-key="id"
            :default-expanded-keys="[2, 3]"
            :default-checked-keys="[5]">
            </el-tree>

        </div>
    </div>
</template>
<script>
import {findTree} from "@/api/role/menu";

export default {
    name: "menuTree",
    data() {
        return {
            data: []
        };
    },
    created() {
        this.getData();
    },
    methods: {
        // 获取 easy-mock 的模拟数据
        getData() {
            findTree().then(res => {
                console.log(res);
                this.data = res.data;
            });
        },
        // // 触发搜索按钮
        // handleSearch() {
        //     this.$set(this.query, "pageIndex", 1);
        //     this.getData();
        // },
    }
};
</script>
