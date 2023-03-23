using Microsoft.EntityFrameworkCore.Migrations;

namespace Backend.Migrations
{
    public partial class Status : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "StatusCodeId",
                table: "Data",
                type: "integer",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Data_StatusCodeId",
                table: "Data",
                column: "StatusCodeId");

            migrationBuilder.AddForeignKey(
                name: "FK_Data_StatusList_StatusCodeId",
                table: "Data",
                column: "StatusCodeId",
                principalTable: "StatusList",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Data_StatusList_StatusCodeId",
                table: "Data");

            migrationBuilder.DropIndex(
                name: "IX_Data_StatusCodeId",
                table: "Data");

            migrationBuilder.DropColumn(
                name: "StatusCodeId",
                table: "Data");
        }
    }
}
