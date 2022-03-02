class ApplicationsController < ApplicationController
  before_action :set_item, only: [:show, :update, :destroy]
  skip_before_action 

  # GET /items
  def index
    @applications = @current_user.applications.all
    # byebug
    render json: @applications
  end

  # GET /items/1
  def show
    render json: @applications
  end

  # POST /items
  def create
    @application = @current_user.applications.create!(item_params)
    # byebug
    render json: @application
  end

  # PATCH/PUT /items/1
  def update
    if @application.update(application_params)
      render json: @application
    else
      render json: @application.errors, status: :unprocessable_entity
    end
  end

  # DELETE /items/1
  def destroy
    @application.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_application
      @application = Application.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def application_params
      params.permit(:company, :position, :contact, :deadline, :sentn, :response, :offer, :accepted, :notes,  :id, :user_id, :user)
    end
end

