using Microsoft.EntityFrameworkCore.Migrations;

namespace Backend.Migrations
{
    public partial class StatusRename : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Data_StatusList_StatusCodeId",
                table: "Data");

            migrationBuilder.RenameColumn(
                name: "StatusCodeId",
                table: "Data",
                newName: "StatusId");

            migrationBuilder.RenameIndex(
                name: "IX_Data_StatusCodeId",
                table: "Data",
                newName: "IX_Data_StatusId");

            migrationBuilder.AddForeignKey(
                name: "FK_Data_StatusList_StatusId",
                table: "Data",
                column: "StatusId",
                principalTable: "StatusList",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Data_StatusList_StatusId",
                table: "Data");

            migrationBuilder.RenameColumn(
                name: "StatusId",
                table: "Data",
                newName: "StatusCodeId");

            migrationBuilder.RenameIndex(
                name: "IX_Data_StatusId",
                table: "Data",
                newName: "IX_Data_StatusCodeId");

            migrationBuilder.AddForeignKey(
                name: "FK_Data_StatusList_StatusCodeId",
                table: "Data",
                column: "StatusCodeId",
                principalTable: "StatusList",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
