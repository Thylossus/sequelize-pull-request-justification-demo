"use strict";
var attributes = {};
var options = {};
var Creator = (function () {
    function Creator() {
    }
    Creator.prototype.create = function (sequelize) {
        return sequelize.define('thing', attributes, options);
    };
    return Creator;
}());
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBVUEsSUFBTSxVQUFVLEdBQXNCLEVBQUUsQ0FBQztBQUN6QyxJQUFNLE9BQU8sR0FBa0MsRUFBRSxDQUFDO0FBRWxEO0lBQUE7SUFJQSxDQUFDO0lBSFUsd0JBQU0sR0FBYixVQUFjLFNBQXFCO1FBQy9CLE1BQU0sQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUF1QixPQUFPLEVBQUUsVUFBVSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQ2hGLENBQUM7SUFDTCxjQUFDO0FBQUQsQ0FBQyxBQUpELElBSUMifQ==