using Microsoft.EntityFrameworkCore.Migrations;

namespace Backend.Migrations
{
    public partial class Initial3 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Data_StatusList_messageStatusId",
                table: "Data");

            migrationBuilder.DropIndex(
                name: "IX_Data_messageStatusId",
                table: "Data");

            migrationBuilder.DropColumn(
                name: "messageStatusId",
                table: "Data");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "messageStatusId",
                table: "Data",
                type: "integer",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Data_messageStatusId",
                table: "Data",
                column: "messageStatusId");

            migrationBuilder.AddForeignKey(
                name: "FK_Data_StatusList_messageStatusId",
                table: "Data",
                column: "messageStatusId",
                principalTable: "StatusList",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
